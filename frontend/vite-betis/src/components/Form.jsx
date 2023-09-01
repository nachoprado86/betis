


const Form = ({onSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: e.target.title.value,
            text: e.target.text.value,
            imageLink: e.target.imageLink.value,
            tags: e.target.tags.value,
            autor: e.target.autor.value
        }
        onSubmit(post);
    }
    return (
        <div>
            <h1>Escribir una publicación</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título</label>
                <input type="text" id="title" name="title" />
                <label htmlFor="text">Texto</label>
                <textarea id="text" name="text" />
                <label htmlFor="imageLink">Imagen</label>
                <input type="text" id="imageLink" name="imageLink" />
                <label htmlFor="tags">Temas</label>
                <input type="text" id="tags" name="tags" />
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor" name="autor" />
                <button type="submit">Publicar</button>
            
            </form>
        </div>
    );
};

export default Form