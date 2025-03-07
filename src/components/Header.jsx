import { useState, useContext } from 'react'
import GlobalContext from "../contexts/GlobalContext";

const initialFormData = { search: "" };

export default function Header() {

    const [formData, setFormData] = useState(initialFormData);
    const { fetchData } = useContext(GlobalContext);

    function handleFormData(e) {

        const value = e.target.value;
        setFormData({ search: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchData(formData.cerca);
    }

    return (
        <header>
            <h1>BOOLFLIX</h1>
            <form id='formpost' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    value={formData.search}
                    onChange={handleFormData}
                    placeholder='Search...'
                />
            </form>
        </header>
    );

}