<?php
class RenderTable extends ArrayObject
{

    // Call __set magic method to set data
    public function __set($name, $value)
    {
        $this[$name] = $value;
    }

    // Declear displayAsTable to return the table as expected 
    public function displayAsTable()
    {
        // Create the table with data 
        $table =  '<table>';
        $table .= '<tbody>';
        $info = $this;
        foreach ($info as $key => $value) {
            $table .= '<tr>';
            $table .= '<th>' . $key . '</th>';
            $table .= '<td>' . $value . '</td>';
            $table .= '</tr>';
        }
        $table .= '</tbody>';
        $table .=  '</table>';

        // Finaly return the table 
        return $table;
    }
}

// Instantiate the class 
$table = new RenderTable();

// Set the value
$table->name = "Md sazib Uddin";
$table->age = "43 years";


echo $table->displayAsTable();
