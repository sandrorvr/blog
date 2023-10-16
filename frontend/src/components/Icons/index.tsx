import './index.css';

type TypeIconSocial = {
    name:String;
}

export const IconSocial = ({name}:TypeIconSocial) => {
    return(
        <span id="linkedin">
            {name}
        </span>
    );
} 