export default function ShootingStars() {
    return (
        <div className="pointer-events-none absolute left-10 top-0 z-30 hidden h-[400px] w-[500px] overflow-hidden dark:block">
            <div className="night-shooting">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
        </div>
    );
}