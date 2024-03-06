import "../../../../css/transactionHistory.css";

export function DownloadXLSX(transactions) {
  const excel = require("exceljs");
  const workbook = new excel.Workbook();

  const worksheet = workbook.addWorksheet("Transaction History");
  worksheet.columns = [
    { header: "Date", key: "transaction_date", width: 15 },
    { header: "Time", key: "transaction_date_time", width: 15 },
    { header: "Amount", key: "transaction_amount", width: 15 },
    { header: "Project Name", key: "project_name", width: 35 },
    { header: "Payment Method", key: "transaction_type", width: 20 },
    { header: "Transaction Id", key: "transaction_id", width: 15 },
  ];

  // Add data to the worksheet
  transactions.forEach(
    (transaction) =>
      (worksheet.addRow({
        transaction_date: transaction.transaction_date.split("T")[0],
        transaction_date_time: transaction.transaction_date
          .split("T")[1]
          .split(":00.000Z")[0],
        transaction_amount: transaction.transaction_amount,
        project_name: transaction.project_name,
        transaction_type: transaction.transaction_type,
        transaction_id: transaction.transaction_id,
      }).commit = true)
  );
  workbook.xlsx.writeBuffer().then(function (data) {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "transaction_history.xlsx";
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
}
