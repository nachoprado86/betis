


const Form = () => {
    return (
        <div>
            <h1>Escribir una publicación</h1>
            <form>
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