import './index.css';
import Item from "./components/item";
import PropTypes from "prop-types";

export default function Index({dataTwitter}) {
    return (
        dataTwitter.map((value) => {
            return <Item data={value} key={value.id}/>
        })
    );
}

Index.protoTypes = {
    dataTwitter: PropTypes.array.isRequired
}
