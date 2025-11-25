import { useEffect, useRef, useState } from "react";
import Modal from "./_modal/Modal"

export default function Feedback() {
    // 対象のDOMを参照するref
    const ref = useRef(null);
    // 要素が見えたかどうかをstateで管理
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // refがまだセットされていない場合は処理を中止
        if (!ref.current) return;

        // IntersectionObserverを作成
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries; // 最初の要素を取得
            if (entry.isIntersecting) {
                // 要素が画面に入ったらvisibleをtrueに
                setVisible(true);
                // 一度だけ検知したら監視を解除
                observer.unobserve(entry.target);
            }
        });

        // 監視を開始
        observer.observe(ref.current);

        // クリーンアップ：監視をすべて解除
        return () => observer.disconnect();
    }, []);

    const [isModal, setIsModal] = useState(false)

    const handleClick = () => {
        setIsModal(isModal ? false : true)
        document.body.style.overflow = "hidden";
    }

    return (
        <>
            <div
                className="feedback"
                ref={ref}
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(20px)",
                    transition: "all 0.5s ease",
                }}
            >
                <h1>We Value Your Feedback</h1>
                <p>We’re gathering feedback from our customers at BAMOS DESIGN.
                    Please take a moment to share your thoughts — your input helps us make BAMOS DESIGN even better.
                </p>
                <button onClick={handleClick}>FEEDBACK</button>
            </div>
            {isModal &&
                <Modal setIsModal={setIsModal} />
            }

        </>
    )
}