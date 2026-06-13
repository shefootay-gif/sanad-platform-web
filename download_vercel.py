import requests
import os

token = "vca_8QIwl80FPGjD2fQyOZzJyXre5VMKZc5FnsRNe1FYz0GqFzxC2z3yLITy"
deployment_id = "dpl_4oNXupc4BFwJ8uvf3RbSkRqSjtMg"
headers = {"Authorization": f"Bearer {token}"}

print("Fetching file list...")
res = requests.get(f"https://api.vercel.com/v6/deployments/{deployment_id}/files", headers=headers)
if res.status_code != 200:
    print("Failed to fetch files:", res.text)
    exit(1)

files = res.json()
for file_info in files:
    file_type = file_info.get("type")
    if file_type == "directory":
        continue
    
    file_name = file_info["file"]
    uid = file_info["uid"]
    
    if file_name.startswith('.next/') or file_name.startswith('node_modules/') or file_name.startswith('.git/'):
        continue
        
    print(f"Downloading {file_name}...")
    file_res = requests.get(f"https://api.vercel.com/v7/deployments/{deployment_id}/files/{uid}", headers=headers)
    if file_res.status_code == 200:
        os.makedirs(os.path.dirname(file_name) or ".", exist_ok=True)
        with open(file_name, "wb") as f:
            f.write(file_res.content)
    else:
        print(f"Failed to download {file_name}: {file_res.status_code}")

print("Download complete!")
