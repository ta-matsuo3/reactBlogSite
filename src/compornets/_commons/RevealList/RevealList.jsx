import { useEffect, useRef } from "react";

/**
 * RevealList（発展型）
 * selector で指定した全要素を監視し、画面内に入ったものから順にクラスを付与する。
 * 返り値はnull（DOMを増やさず、監視ロジックだけを提供）。
 */
export default function RevealList({ selector = ".reveal", threshold = 0.2, once = true }) {
    // ① IntersectionObserverインスタンスを保持するref
    //    useRefを使うことで再レンダーしても同じインスタンスを参照できる
    const observerRef = useRef(null);

    useEffect(() => {
        // ② Observerを生成。entriesは監視対象それぞれの状態が入る
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 画面に入ったら
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in"); // ← 任意のクラスを付与

                        // 一度だけアニメで良いなら監視解除。再発火させたい場合は外す
                        if (once) observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            { threshold } // 要素が何割見えたら発火するか（0〜1）。配列で複数指定も可
        );

        // ③ 対象ノードをまとめて取得して監視開始
        const nodes = document.querySelectorAll(selector);
        nodes.forEach((n) => observerRef.current.observe(n));

        // ④ クリーンアップ：ページ遷移や再実行時に全監視を解除
        return () => observerRef.current?.disconnect();
    }, [selector, threshold, once]); // ← セレクタや閾値が変わったら監視を作り直す

    return null; // 監視ロジックのみ
}
