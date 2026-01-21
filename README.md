# 株式会社由岳 - コーポレートサイト

## 概要

株式会社由岳の公式Webサイトです。アプリ制作と美術品取扱を主な事業として、信頼獲得と問い合わせ獲得を目的としたサイトを実装しています。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: microCMS
- **フォーム送信**: Formspree
- **アイコン**: Font Awesome
- **フォント**: Inter, Noto Sans JP

## 主な機能

### 1. レスポンシブデザイン
- モバイルファースト設計
- タブレット・デスクトップ対応

### 2. コンテンツ管理 (microCMS連携)
- **Artworks**: 作品情報管理
- **Artists**: 作家情報管理  
- **News**: ニュース記事管理

### 3. お問い合わせフォーム
- Formspreeを使用したフォーム送信
- 作品詳細ページからの自動入力対応
- バリデーション実装

### 4. SEO対応
- メタデータ設定
- OGP画像対応
- 構造化データ（基本的な実装）

## ページ構成

### 主要ページ
- **トップページ** (`/`): ヒーロー、事業紹介、ギャラリー抜粋、ニュース、会社概要
- **事業ページ** (`/services`): アプリ制作、美術品取扱、SNS運用支援
- **ギャラリーページ** (`/gallery`): 作品一覧、フィルター機能、詳細ページ
- **ニュースページ** (`/news`): ニュース一覧、詳細ページ
- **会社情報** (`/company`): 企業理念、会社概要、事業内容
- **お問い合わせ** (`/contact`): 問い合わせフォーム

### 補助ページ
- **プライバシーポリシー** (`/privacy`): プライバシーポリシー
- **免責事項** (`/disclaimer`): 免責事項
- **404ページ**: ページが見つからない場合の表示

## 環境変数

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
MICROCMS_ENDPOINT_NEWS=news
MICROCMS_ENDPOINT_ARTISTS=artists
MICROCMS_ENDPOINT_ARTWORKS=artworks
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your-formspree-endpoint
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## デプロイ

このプロジェクトは静的サイトとしてビルドできます。お好みのホスティングサービスにデプロイしてください。

## カスタマイズ

### カラースキーム
`tailwind.config.js`でカラースキームをカスタマイズできます：

```javascript
colors: {
  primary: {
    // プライマリカラー設定
  },
  secondary: {
    // セカンダリカラー設定
  }
}
```

### microCMS コンテンツモデル

#### Artworks
- title (テキストフィールド)
- slug (テキストフィールド)
- images (画像フィールド、複数)
- artist (参照、Artists)
- category (セレクト、絵画/工芸/写真)
- status (セレクト、Available/Reserved/SOLD)
- description (リッチエディタ)
- price (数値フィールド)

#### Artists
- name (テキストフィールド)
- slug (テキストフィールド)
- profile (リッチエディタ)
- image (画像フィールド)

#### News
- title (テキストフィールド)
- slug (テキストフィールド)
- date (日付フィールド)
- body (リッチエディタ)

## 注意事項

- 住所詳細・地図は掲載していません（自宅兼業のため）
- SNS運用支援は紹介制で、強いCTAは配置していません
- 作品の色味は実際と異なる場合がある旨、注意書きを配置
- 在庫状況は常に変動することを明記

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

株式会社由岳
お問い合わせフォーム: /contact
