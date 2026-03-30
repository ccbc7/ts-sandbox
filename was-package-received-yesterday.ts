// このカタは、簡略化されたタイムゾーンについて考察するものです
// tz_from、tz_to、start、duration が与えられたとき、次の質問に対する答えとなるブール値を返してください：
// 「パッケージは発送日の前日に受け取られたか？」

// 詳細
// タイムゾーンは、-11 から +12 までの整数（0 を含む）で表されます。
// 1 時間ごとに 1 つのゾーンがあり、1 日に合計 24 ゾーンがあります。
// この簡略化では、-11 未満および +12 を超えるゾーン、30 分および 45 分のオフセット、
// 夏時間、およびタイムフォールドは無視されます。

// 荷物は、tz_from と tz_to の2つのタイムゾーン間で送られ、
// 現地時間の開始時刻（0～23の整数、24時間制）に発送されます。
// 配送には duration 時間（0～24の整数）かかります。

// 例
// 例 1.
// tz_from=3、tz_to=0、start=13、duration=1の場合、Falseを返す。
// タイムゾーン3から13:00に送信されたパッケージは、タイムゾーン0に配達されるまで1時間かかる。
// パッケージは送信された当日の現地時間11:00に受信される。
// 送信前日には受信されなかったため、「False」を返す。

// 例 2.
// tz_from=12、tz_to=-3、start=5、duration=8の場合、Trueを返す。
// タイムゾーン12から05:00に発送された荷物は、タイムゾーン-3に配達されるまで8時間かかる。
// 荷物は発送日の前日の現地時間22:00に受領される。
// 発送日の前日に受領されたため、「True」を返す。

export function was_package_received_yesterday(
    tz_from: number,
    tz_to: number,
    start: number,
    duration: number,
): boolean {
    // 時差を計算
    const total_time_difference = tz_to - tz_from;
    console.log('時差：', total_time_difference);

    // 配達時刻を計算
    const delivery_time = start + duration;
    console.log('配達時刻：', delivery_time);

    // 時差を加算した配達時刻を計算
    const adjusted_delivery_time = delivery_time + total_time_difference;
    console.log('時差を加算した配達時刻：', adjusted_delivery_time);

    // 配達時刻が午前0時より前の場合、前日に受領と判定する
    if (adjusted_delivery_time < 0) {
        return true;
    }

    // 配達時刻が午前0時以降の場合、当日以降に受領と判定する
    return false;
}

console.log(was_package_received_yesterday(0, -6, 2, 3));
