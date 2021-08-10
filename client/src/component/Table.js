import Styles from "./Table.module.scss";

export default function Table(props) {
  const {
    header,
    subtitile,
    talbeHeader,
    tableData,
    dropDownOptions,
    handleDropdownChange,
  } = props;

  return (
    <div className={Styles.container}>
      <p className={Styles.title}>{header}</p>
      {subtitile && <p className={Styles.subtitile}>{subtitile}</p>}
      {dropDownOptions && (
        <div>
          <select
            className={Styles.select}
            name="items"
            id="items"
            placeholder="items"
            onChange={handleDropdownChange}
          >
            {dropDownOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      )}
      {tableData && (
        <table className={Styles.tableStyle}>
          <tr className={Styles.tableColStyle} key={"head"}>
            {talbeHeader.map((header) => (
              <th
                className={`${Styles.tableHeadStyle} ${Styles.tabaleDataStyle}`}
                key={header}
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
          <tbody>
            {tableData.map((data, index) => (
              <tr className={Styles.tableColStyle} key={index}>
                {Object.values(data).map((value) => (
                  <td className={Styles.tabaleDataStyle} key={value}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
