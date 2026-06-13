import json
import os
import ast

log_file = r'C:\Users\shefo\.gemini\antigravity-ide\brain\bcda9afa-b7bd-447f-be19-6ab1b2871fff\.system_generated\logs\transcript.jsonl'
files = {}

def clean_arg(arg):
    if isinstance(arg, str):
        if arg.startswith('"') and arg.endswith('"'):
            # It's a JSON encoded string
            try:
                return json.loads(arg)
            except:
                pass
    return arg

with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
        except:
            continue
            
        # Parse write_to_file
        if 'tool_calls' in data:
            for call in data['tool_calls']:
                if call['name'] == 'write_to_file':
                    args = call.get('args', {})
                    target = clean_arg(args.get('TargetFile', ''))
                    content = clean_arg(args.get('CodeContent', ''))
                    if target and isinstance(target, str):
                        target = target.replace('\\\\', '\\').replace('/', '\\')
                        files[target] = content
                elif call['name'] == 'replace_file_content':
                    args = call.get('args', {})
                    target = clean_arg(args.get('TargetFile', ''))
                    if target and isinstance(target, str):
                        target = target.replace('\\\\', '\\').replace('/', '\\')
                        if target in files:
                            target_content = clean_arg(args.get('TargetContent', ''))
                            replacement = clean_arg(args.get('ReplacementContent', ''))
                            files[target] = files[target].replace(target_content, replacement)

for filepath, content in files.items():
    if not filepath.endswith('.tsx') and not filepath.endswith('.ts'):
        continue
    if not 'sanad-platform-web' in filepath:
        continue
    print(f'Restoring {filepath}')
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
