import "../../../css/global.css";
import "../../../css/transactionHistory.css";
import { TransactionDropdown } from "./components/transaction-dropdown";
import { useEffect, useState } from "react";
import {
  fetchTransactions,
  fetchTransactionsByProjectId,
} from "../../../lib/fetchAPI";
import { loginCheck } from "../../../lib/loginCheck";
import { ProfileLinks } from "../../../components/profileLinks";
import { TransactionTable } from "./components/transactionTable";
import { DownloadXLSX } from "./components/download-xlsx";
import { NotLoggedIn } from "../../../components/notLoggedIn";
import { useLoading } from "../../../lib/useLoading";
import { ErrorMessage } from "../../../components/errorMessage";

export function TransactionHistory() {
  const [projectId, setProjectId] = useState("");
  const [chosenProject, setChosenProject] = useState("All Projects");
  const [transactions, setTransactions] = useState([]);
  const { data, error, isLoading } = useLoading(loginCheck);

  useEffect(async () => {
    window.scrollTo(0, 0);
    if (chosenProject === "All Projects") {
      setTransactions(await fetchTransactions());
    } else {
      setTransactions(await fetchTransactionsByProjectId(projectId));
    }
  }, [chosenProject, setChosenProject]);
  if (isLoading) {
    return <div className={"not-logged-in-buffer-height"}></div>;
  }
  if (data === false) {
    return <NotLoggedIn />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <header className={"profile-main"}>
        <h1 className="profile-header">TRANSACTION HISTORY</h1>
      </header>
      <ProfileLinks />

      <div className={"transaction-select-project-container"}>
        <TransactionDropdown
          setProjectId={setProjectId}
          setChosenProject={setChosenProject}
        />
      </div>
      <div className={"transaction-table-container"}>
        <TransactionTable transactions={transactions} />
      </div>
      <div className="button-container">
        <button
          className={"button"}
          onClick={() => {
            DownloadXLSX(transactions);
          }}
        >
          Download as .XLSX
        </button>
      </div>
    </>
  );
}
