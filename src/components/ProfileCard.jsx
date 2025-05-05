export default function ProfileCard({ name, address, phone, pfp, bestie }) {
    return (
      <div className="card">
        <div>
          <img src={pfp} alt="" />
          <p>{name}</p>
        </div>
        <div>
          <div>
            <img src="/icons/ic-home.svg" className="icon" />
            <p>{address}</p>
          </div>
  
          <div>
            <img src="/icons/ic-wa.svg" className="icon" />
            <a href={`https://wa.me/${phone}`}>{phone}</a>
          </div>
        </div>
      </div>
    );
  }
  