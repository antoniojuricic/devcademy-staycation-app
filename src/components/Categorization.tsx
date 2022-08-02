import starIcon from "../assets/star.svg";

const Categorization = ({ rating }: { rating: number }) => {
  const ratingArr = [];
  for (var i = 0; i < rating; i++) {
    ratingArr.push(<img src={starIcon} />);
  }
  return <div>{ratingArr}</div>;
};

export default Categorization;
