import { Input } from "@/components/shared";
import { InputAddContact } from "@/components/features/Contacts";
import styles from "./page.module.css";
import { ContactsGrid } from "@/components/features/Contacts";

export default function ChatApp() {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <header className={styles.asideHeader}>
          <InputAddContact />
        </header>
        <section className={styles.asideSection}>
          <ContactsGrid />
        </section>
      </aside>
      <section className={styles.section}>
        <header className={styles.sectionHeader}></header>
        <div className={styles.sectionBody}>body</div>
        <footer className={styles.sectionFooter}>
          <Input placeholder="Type a message" />
        </footer>
      </section>
    </main>
  );
}
