const Avatar = ({seed,style}) => {
    return (
        <div>
             <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}  
             className={style} />
        </div>
    );
}

export default Avatar;