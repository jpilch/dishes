import styles from "../../styles/App.module.scss";
import Form from "../dishes/Form";

function App() {
    return (
        <main className={styles.main}>
            <section className={styles.main__hero}>
                <div className={styles.main__img} />
                <div className={styles.main__overlay}>
                    <h1 className={styles.main__heading}>
                        Dishes
                    </h1>
                    <p>
                        At Dishes, we believe food should be celebrated together. That's why our website lets you share and discover awesome recipies.
                    </p>
                </div>
            </section>
            <section className={styles.main__form}>
                <Form />
            </section>
        </main>
    );
}

export default App;
