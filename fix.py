import os
for root, _, files in os.walk(r'd:\Python_Projects\sanad-platform-web\src'):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            if r'\n' in content and not 'return null' in content:
                print('Fixing', path)
                if content.startswith('"') and content.endswith('"'):
                    content = content[1:-1]
                content = content.encode('utf-8').decode('unicode_escape')
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
