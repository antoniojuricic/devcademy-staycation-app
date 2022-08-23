import Categorization from "../Categorization";
import PropertyInfo from "../PropertyInfo/PropertyInfo";
import calendar from "../../assets/calendar.svg";
import styles from "./AccommodationDetails.module.css";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const AccommodationDetails = () => {
  let { id } = useParams();
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/Accomodations/" + id,
  });

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {response && (
        <div>
          <img className={styles.image} src={response.data.imageUrl} />
          <div className={styles.content}>
            <div className={styles.mainInfo}>
              <div className={styles.inline}>
                <div className={styles.title}>{response.data.title}</div>
                <Categorization rating={response.data.categorization} />
              </div>
              <div className={styles.subtitle}>{response.data.subtitle}</div>
              {response.data.freeCancellation && (
                <div className={styles.cancellationPlaceholder}>
                  <img src={calendar} />
                  Free cancellation available
                </div>
              )}
              <div className={styles.description}>
                {response.data.description}
              </div>
            </div>
            <PropertyInfo
              id={response.data.id}
              personCount={response.data.personCount}
              type={response.data.type}
              price={response.data.price}
              location={response.data.location.name}
              postalCode={response.data.location.postalCode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationDetails;
