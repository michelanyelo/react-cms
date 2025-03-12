import ContactForm from "./ContactForm.tsx";
import ContactTable from "./ContactTable.tsx";

const Layout = () => {
    return (
        <div className={"container"}>
            <div className={"row "}>
                <div className={"col"}>
                    <ContactForm/>
                </div>
            </div>
            <div className={"row "}>
                <div className={"col"}>
                    <ContactTable/>
                </div>
            </div>
        </div>
    );
};

export default Layout;