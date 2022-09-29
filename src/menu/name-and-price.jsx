export const NameAndPrice = ({ item }) => <div className="row align-items-start">
    <div className="col-6">
        <h4>{item.name}</h4>
    </div>
    <div>
        <h4 className="text-muted menu-price">{item.price} RON</h4>
    </div>
</div>

