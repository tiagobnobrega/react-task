import { Design } from "./_internal/Design";
import "./App.css";
import { useEffect } from "react";
import { getItems } from "./_internal/api";
/**
 * Requirements:
 *
 * Implemented a paginated view that will display the cards on a grid.
 *
 * # Cards
 * Build components to present both cards described on the design reference.
 * The cards should have a size of 200px x 300px.
 * The images on the card Type:1 should have 120px x 120px.
 * Images should be centered covering the whole 120px square, cropped without distortions.
 *
 * Each type of item should be rendered by the correct type of card:
 *  - Items with type=1 should be rendered using card Type: 1
 *  - Items with type=2 should be rendered using card Type: 2
 *
 * # Themes
 * Implement multiple themes.
 *  theme `obisidian` has the balck #000 background on elements
 *  theme `snow` has the grey #EAECEF bacground.
 *
 * #Pagination
 * Implement any type of pagination, including but not required infinite scrolling
 * If page-based pagination is implemented, each page should have at most 20 items.
 * Loading states needs to be considered.
 * There are no requirements to any loading state as it will depend on the solution
 * It could be as simple as a "Loading..." text displaying on a div or a button.
 *
 * #Data
 * The data to be rendered is exposed through a mock api call using the `getItems` function.
 * This function simulates a requrest delay and accepts a `pageSize` and `page` arguments.
 * The api returns the fetched items in the `items`.
 * Information about pagination is returned in the `pagination` prop.
 *
 */
export default function App() {
  useEffect(() => {
    const logItems = async () => {
      const items = await getItems({ page: 1, pageSize: 10 });
      const items2 = await getItems({ page: 200, pageSize: 5 });
      console.log("items: ", items);
      console.log("items2: ", items2);
    };
    logItems().catch((e) => console.error(e));
  }, []);

  return (
    <div className="App">
      <h1 className="centered">Design System Card Component</h1>
      <h2 className="centered">Design Reference</h2>
      <div className="centered">
        <Design />
      </div>
      <h2 className="centered">Components:</h2>
      {/* Add component Here */}
    </div>
  );
}
