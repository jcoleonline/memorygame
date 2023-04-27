import "./MemoryCard.css";
import '../App.css';

const MemoryCard = ({ symbol, isFlipped, pickCard }) => {
    const memoryCardInnerClass = isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
    return (
        <div className="MemoryCard" onClick={pickCard}>
            <div className={memoryCardInnerClass}>
                <div className="MemoryCardBack">
                </div>
                <div className="MemoryCardFront">
                    {symbol}
                </div>
            </div>
        </div>
    )
};


export default MemoryCard;

