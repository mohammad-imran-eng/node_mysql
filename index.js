const mysql = require('mysql');

const databaseConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
}

const con = mysql.createConnection(databaseConnectionConfig);
con.connect((error) => {
    if (error) {
        console.log("Connection Fail");
    }
    else {
        console.log("Connection Success");
        // InsertData(con)
        // DataDelete(con)
        // UpdateData(con)
        SelectData(con)
    }
});


const InsertData = (con) => {
    const insert_query = "INSERT INTO `students_list`(`id`,`name`, `roll`, `class`, `mobile`, `city`) VALUES('3','Abdullah','103','16','01758236589','Tangile')";
    con.query(insert_query, (error) => {
        if (error) {
            console.log("Data insert Fail");
        }
        else {
            console.log("Data insert Success");
        }
    });
}

const DataDelete = (con) => {
    const delete_query = "DELETE FROM `students_list` WHERE `id`='4'";
    con.query(delete_query, (error) => {
        if (error) {
            console.log("Data delete Fail");
        }
        else {
            console.log("Data delete Success");
        }
    });
}

const UpdateData = (con) => {
    const update_query = "UPDATE `students_list` SET `id`='2' WHERE `id`='6'";
    con.query(update_query, (error) => {
        if (error) {
            console.log("Data update Fail");
        }
        else {
            console.log("Data update Success");
        }
    });
}


const SelectData = (con) => {
    const select_query = "SELECT * FROM `students_list`";
    con.query(select_query, (error, result) => {
        if (error) {
            console.log("Data select Fail");
        }
        else {
            console.log(result);
        }
    });
}