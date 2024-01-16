document.addEventListener('DOMContentLoaded', function () {
    // Sample data for departments and accounts
    const data = [
        { department: 'Marketing', accounts: ['Account 1', 'Account 2', 'Account 3'] },
        { department: 'HR', accounts: ['Account 1', 'Account 2', 'Account 3'] },
        // Add more departments and accounts as needed
    ];

    const dashboardSection = document.getElementById('dashboardSection');

    // Loop through the data and generate HTML content
    data.forEach(departmentData => {
        const departmentDiv = document.createElement('div');
        departmentDiv.classList.add('department');

        const departmentHeader = document.createElement('h2');
        departmentHeader.textContent = departmentData.department;

        departmentDiv.appendChild(departmentHeader);

        departmentData.accounts.forEach(account => {
            const accountDiv = document.createElement('div');
            accountDiv.classList.add('account');
            accountDiv.textContent = `${account}: 8 licenses`;

            departmentDiv.appendChild(accountDiv);
        });

        dashboardSection.appendChild(departmentDiv);
    });
});
