import { useState } from "react";
function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);
  const [sortByDate, setSortByDate] = useState(false);


  const sortByDateHandler =()=>{
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views;
      }
      return sortByDate
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setData(sortedData)
    setSortByDate(!sortByDate)
  }
  const sortByViews =()=>{
    const sortedData = [...data].sort((a,b)=>{
      if(a.views===b.views){
        return sortByDate ?  new Date(b.date) - new Date(a.date) : 0
      }
      return b.views -a.views
    })

    setData(sortedData)
    setSortByDate(false)
  }

  return (
    <div >
      <h1> Date and Views Table</h1>
      <button onClick={sortByDateHandler}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item,index)=>(
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
