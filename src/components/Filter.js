const Filter = ({ onChange, value }) => (
    <section>
        filter names: <input onChange={onChange} value={value} />
    </section>
);
export default Filter;
