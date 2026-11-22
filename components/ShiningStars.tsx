export default function ShiningStars() {
    return (
        <div className="pointer-events-none absolute left-50 top-0 hidden h-[500px] w-[500px] dark:block">
            <div className="night">
                <div className="single-star"></div>
                <div className="single-star"></div>
                <div className="single-star"></div>
                <div className="single-star"></div>
                <div className="single-star"></div>
            </div>
        </div>
    );
}