// CustomArrow.js

export const CustomPrevArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
            &#10094; {/* Left arrow symbol */}
        </div>
    );
};

export const CustomNextArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow custom-next-arrow" onClick={onClick}>
            &#10095; {/* Right arrow symbol */}
        </div>
    );
};
