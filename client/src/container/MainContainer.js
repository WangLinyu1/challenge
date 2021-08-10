import { useEffect, useState } from "react";
import { getUserInfo, getUsersAge, getItems } from "../service/service";
import Table from "../component/Table";

function MainContainer() {
  const [allUser, setAllUser] = useState();
  const [ageConunt, setAgeCount] = useState();
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(async () => {
    const userInfors = await getUserInfo();
    setAllUser(userInfors);

    const items = await getItems();
    setItemList(items);
    setSelectedItem(items[0]);

    const ages = await getUsersAge(items[0]);
    setAgeCount(ages);
  }, []);

  async function handleDropdownChange(e) {
    const value = e.target.value;
    setSelectedItem(value);
    const ages = await getUsersAge(value);
    setAgeCount(ages);
  }

  return (
    <div>
      <Table
        header={"All User"}
        subtitile={"User and their age"}
        talbeHeader={allUser ? Object.keys(allUser[0]) : []}
        tableData={allUser}
      />
      <Table
        header={`Age Demographic of Users With ${
          selectedItem ? selectedItem : "____"
        }`}
        talbeHeader={ageConunt ? Object.keys(ageConunt[0]) : []}
        tableData={ageConunt}
        dropDownOptions={itemList}
        handleDropdownChange={handleDropdownChange}
      />
    </div>
  );
}

export default MainContainer;
