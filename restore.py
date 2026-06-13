import json
import os

log_file = r'C:\Users\shefo\.gemini\antigravity-ide\brain\bcda9afa-b7bd-447f-be19-6ab1b2871fff\.system_generated\logs\transcript.jsonl'
files = {}

with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] in ['write_to_file', 'replace_file_content']:
                        args = call.get('args', {})
                        if 'TargetFile' in args:
                            target = args['TargetFile']
                            if target.startswith('"') and target.endswith('"'):
                                target = target[1:-1]
                            # Normalize path separators
                            target = target.replace('\\\\', '\\').replace('/', '\\')
                            if target.endswith('.tsx') or target.endswith('.ts') or target.endswith('.json'):
                                if call['name'] == 'write_to_file':
                                    content = args.get('CodeContent', '')
                                    if content.startswith('"') and content.endswith('"'):
                                        content = content[1:-1]
                                    try:
                                        content = content.encode('utf-8').decode('unicode_escape')
                                    except:
                                        pass
                                    files[target] = content
                                elif call['name'] == 'replace_file_content':
                                    if target in files:
                                        target_content = args.get('TargetContent', '')
                                        if target_content.startswith('"') and target_content.endswith('"'):
                                            target_content = target_content[1:-1]
                                        try:
                                            target_content = target_content.encode('utf-8').decode('unicode_escape')
                                        except:
                                            pass
                                            
                                        replacement = args.get('ReplacementContent', '')
                                        if replacement.startswith('"') and replacement.endswith('"'):
                                            replacement = replacement[1:-1]
                                        try:
                                            replacement = replacement.encode('utf-8').decode('unicode_escape')
                                        except:
                                            pass
                                            
                                        files[target] = files[target].replace(target_content, replacement)
        except Exception as e:
            pass

for filepath, content in files.items():
    print(f'Restoring {filepath}')
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
