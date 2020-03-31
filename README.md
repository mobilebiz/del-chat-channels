# delChatChannels

Twilio Flexを利用中に、突然チャット系サービスのメッセージがうまくハンドリングできなくことがあります。  
多くの場合、Twilio Chatのチャネルを削除することで解決します。  

## セットアップ

```sh
git clone https://github.com/mobilebiz/del-chat-channels.git
cd del-chat-channels
npm install
cp .env.sample .env
```

.envファイルをエディタで開き、以下の変数を設定します。

変数名|説明
:--|:--
TWILIO_ACCOUNT_SID|Account Sid（ACから始まる文字列）
TWILIO_AUTH_TOKEN|Auth Token
TWILIO_CHAT_SERVICE_SID|ChatサービスのSID（ISから始まる文字列）

## テスト

実行する前にテストをしてみましょう。

```sh
npm test
```

対象件数が0件以上であれば、テストが成功します。テストでは実際の削除はされません。  
画面に対象件数も表示されているはずです。

## 実行

削除を実行するには、以下のコマンドを入力します。

```sh
npm start
```

対象件数の他、削除されたチャンネルSIDが表示されます。

## <font color='red'>注意事項</font>

減税継続中のチャットに関しては、すべての履歴がなくなりますので注意してください。  
本プログラムの利用により発生した問題に関しては、当方ではいかなる責任も負いません。
