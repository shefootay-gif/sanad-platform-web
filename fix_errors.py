import os
import re

directory = r"d:\Python_Projects\sanad-platform-web\src\app\[locale]\tools"
pattern = re.compile(r"title=\{[a-zA-Z]+ === 'ImageIcon' \? t\('pdfToJpg'\) : t\('([a-zA-Z-]+)'\) \}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".tsx"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = pattern.sub(r"title={t('\1')}", content)
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Fixed {filepath}")
