# ビルド
build:
	docker compose build

# ビルド（キャッシュなし）
build_no_cache:
	docker compose build --no-cache

# 起動
up:
	docker compose up --build

upd: 
	docker compose up -d --build

# 再起動
re:
	docker compose restart

# 停止
down:
	docker compose down --remove-orphans

# デバッグ実行（引数でファイル指定: make debug f=sample.ts）
debug:
	docker compose exec app npx tsx --inspect=0.0.0.0:9229 $(f)

# コンテナ内に入る
sh:
	docker compose exec app bash
