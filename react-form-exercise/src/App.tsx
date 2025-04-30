import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  firstname: string;
  lastname: string;
  age: number;
  favoriteFoods: string[];
};

const App = () => {
  /* Your states here */
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  });
  const [showGreeting, setShowGreeting] = useState(false);


  const handelChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedFavFoods = checked
        ? [...prevState.favoriteFoods, value]
        : prevState.favoriteFoods.filter((kind) => kind !== value);
      return {
        ...prevState,
        favoriteFoods: updatedFavFoods,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: [],
    });
  };

  const handleDisplay = () => {
    setShowGreeting(true);
  };

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: [],
    });
    setShowGreeting(false);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handelChange}
            value={formData.age}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              checked={formData.favoriteFoods.includes("Chicken")}
              value="Chicken"
              onChange={handleCheckboxChange}
            />
            <label>Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              checked={formData.favoriteFoods.includes("Beef")}
              value="Beef"
              onChange={handleCheckboxChange}
            />
            <label>Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              checked={formData.favoriteFoods.includes("Vegetables")}
              value="Vegetables"
              onChange={handleCheckboxChange}
            />
            <label>Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              checked={formData.favoriteFoods.includes("Dessert")}
              value="Dessert"
              onChange={handleCheckboxChange}
            />
            <label>Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              checked={formData.favoriteFoods.includes("Pork")}
              value="Pork"
              onChange={handleCheckboxChange}
            />
            <label>Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplay}>Display User</button>
      <button onClick={handleClear}>Clear</button>

      {showGreeting ? (
        <div className="output">
          <h2>
            Hello {formData.firstname} {formData.lastname}. You are{" "}
            {formData.age} years old and your favorite foods are:{" "}
            {formData.favoriteFoods.join(", ")}.
          </h2>
        </div>
      ) : (
        <div className="output">
          <h2 style={{ color: "red"}}>
           Please Input Infomation!!!
          </h2>
        </div>
      )}
    </div>
  );
};

export default App;
