import os
import yaml

MKDOCS_YML = "mkdocs.yml"
DOCS_DIR = "docs"

def generate_nav():
    nav = []
    languages = ["eng", "vi"]

    for lang in languages:
        lang_dir = os.path.join(DOCS_DIR, lang)
        if not os.path.exists(lang_dir):
            continue

        section = {}
        for file in sorted(os.listdir(lang_dir)):
            if file.endswith(".md"):
                title = file.replace("-", " ").replace(".md", "").title()
                section[title] = f"{lang}/{file}"

        nav.append({lang.capitalize(): section})

    return nav

def update_mkdocs_yml():
    with open(MKDOCS_YML, "r", encoding="utf-8") as f:
        config = yaml.safe_load(f)

    config["nav"] = generate_nav()

    with open(MKDOCS_YML, "w", encoding="utf-8") as f:
        yaml.dump(config, f, allow_unicode=True, default_flow_style=False, sort_keys=False)

    print("✅ mkdocs.yml updated successfully!")

if __name__ == "__main__":
    update_mkdocs_yml()
