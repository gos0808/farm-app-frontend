import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch } from "react-redux";
import { filterMonths } from "../../redux/productsSlice";


const MonthFilter = ({ month }) => {
    const dispatch = useDispatch();
    ;
    return (
        <div className='dropdown'>
            <p className="dropdown-label">Harvested in:</p>
            <FormControl>
                <Select
                    className="select"
                    defaultValue="All months"
                    onChange={(e) => dispatch(filterMonths(e.target.value))}>

                    {month.map((month, index) => <MenuItem
                        value={month} key={index}>
                        {month}
                    </MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
};

export default MonthFilter;