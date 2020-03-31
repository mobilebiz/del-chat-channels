# delChatChannels

Twilio Chatで、現在Twilio上に残っているユーザやチャンネルをすべて削除します。

## なぜ削除が必要なのか

Twilio Chatでは、サービスという枠の中に、ユーザとチャンネルが存在します。ユーザは複数のチャンネルに属することができ、そのチャンネル内でやり取りされるメッセージを受け取ることができます。  
Twilio上には、過去にやり取りされたメッセージがチャンネル単位で記録されています。課金の単位は、ユーザ数とチャンネル内に保存されたメッセージのストレージ容量です。  

![Twilio Chat概念図](https://raw.githubusercontent.com/mobilebiz/images/master/del-chat-channels-image-01.png "概念図")

無駄な課金を防ぐために、定期的にユーザやチャネルを削除したいことがありますが、管理コンソールではまとめて削除できないために、本プログラムを作成しました。

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

それぞれの対象件数が0件以上であれば、テストが成功します。テストでは実際の削除はされません。  
画面に対象件数も表示されているはずです。

## 実行

ユーザとチャンネルのすべてのデータを削除を実行するには、以下のコマンドを使います。

```sh
npm start
```

チャンネルだけを削除したい場合は、以下のコマンドを使います。

```sh
npm delChannels
```

ユーザだけを削除したい場合は、以下のコマンドを使います。

```sh
npm delUsers
```

## <font color='red'>注意事項</font>

現在継続中のチャットに関しては、すべてのユーザと履歴がなくなりますので注意してください。  
本プログラムの利用により発生した問題に関しては、当方ではいかなる責任も負いません。