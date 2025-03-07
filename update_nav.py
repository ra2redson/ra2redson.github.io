import os
import yaml

MKDOCS_YML = "mkdocs.yml"
DOCS_DIR = "docs"

def update_mkdocs_yml():
    with open(MKDOCS_YML, "r", encoding="utf-8") as f:
        config = yaml.safe_load(f)

    # Giữ lại phần `nav` cũ nếu có, chỉ cập nhật nếu cần
    new_nav = generate_nav()
    if "nav" in config:
        for item in new_nav:
            if item not in config["nav"]:
                config["nav"].append(item)  # Chỉ thêm nếu chưa có
    else:
        config["nav"] = new_nav  # Nếu chưa có, thêm mới

    with open(MKDOCS_YML, "w", encoding="utf-8") as f:
        yaml.dump(config, f, allow_unicode=True, default_flow_style=False, sort_keys=False)

    print("✅ mkdocs.yml updated successfully!")

if __name__ == "__main__":
    update_mkdocs_yml()
