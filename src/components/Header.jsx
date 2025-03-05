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
            <form id='formpost' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    value={formData.search}
                    onChange={handleFormData}
                    placeholder='Search'
                />
                <button>Search</button>
            </form>
        </header>
    );

}