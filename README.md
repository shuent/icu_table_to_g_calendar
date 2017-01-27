# ICU table to Google Calendar

## About
icuMapの時間割を自動で3ヶ月分googleカレンダー登録します。

Link:
https://docs.google.com/spreadsheets/d/1D7DYHsJOCbbuLH-jU8xy2h9lpoNJPtM798oeCwmwzM4/edit?usp=sharing

## Usage

Usage Video:
https://www.youtube.com/watch?v=1Z2gd29epY0


1. このシートをコピーして、自分のdriveに入れる。
1. icuMAPから時間割をコピーする。
2. 例の部分に上書きして貼り付ける。(全く同じ場所に貼ってください. otherwise error will ocurre)
3. スクリプト実行!
4. 実行した週の月曜から、学期の終わりの日付まで自分のGoogleカレンダーに登録します。

### Caution
- 何回も実行すると、カレンダーがその分作られてしまいます。
- その場合、function deleteCalendars() で"this timetable"と名のついたカレンダーを全て消すことができます。
- カスタマイズしてもらって構いません。
- 改善あれば,プルリクください。


