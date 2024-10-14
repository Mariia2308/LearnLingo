import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { Container } from "../CommonStyles.styled";
import { CardsList } from "../components/Teachers/CardsList/CardsList";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { Filter } from "../components/Filter/Filter";
import { database } from "../../src/components/firebase/firebase";
import { ref, get, limitToFirst, query, orderByKey } from "firebase/database";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "../components/Toaster/Toaster";
import { ScrollUpButton } from "../../src/components/ScrollUpButton/ScrllUpButton";

const LIMIT_PER_PAGE = 4;
const TEACHERS_COLLECTION = "teachers";

const Teachers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [teacherCount, setTeacherCount] = useState(LIMIT_PER_PAGE);
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const limitedTeachersRef = query(
      ref(database, TEACHERS_COLLECTION),
      orderByKey(),
      limitToFirst(teacherCount)
    );

    async function fetchTeachers() {
      try {
        const data = await get(limitedTeachersRef);
        if (data.exists()) {
          const teachersData = [];
          data.forEach((teacherSnapshot) => {
            teachersData.push(teacherSnapshot.val());
          });
          setTeachers(teachersData);
          setIsLoading(true);
          setError(false);
        } else {
          setError(true);
          toast.warning("No data available for teachers");
        }
      } catch (error) {
        toast.warning("Error fetching teachers:", error);
      } finally {
        setIsLoading(false);
        setError(false);
      }
    }

    fetchTeachers();
  }, [teacherCount]);

  const clickLoadMore = () => {
    setTeacherCount((prevTeacherCount) => prevTeacherCount + LIMIT_PER_PAGE);
    setIsLoading(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section style={{ background: "#f8f8f8" }}>
        <Container>
          {!isModalOpen && <ScrollUpButton />}
          <Filter />
          {isLoading && !error && <Loader />}
          {error && <p>Something went wrong, try reloading the page</p>}
          <>
            <CardsList
              allTeachers={teachers}
              openModal={openModal}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
            />
            {teacherCount <= teachers.length && (
              <LoadMore clickLoadMore={clickLoadMore} />
            )}
          </>
        </Container>
      </section>

      <Toaster />
    </>
  );
};

export default Teachers;
