class AppService{
    async getUsers(portfolioId) {
        const url = `http://localhost:5000/user/${portfolioId}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const userDetails = await response.json();
        console.log(userDetails);
        return userDetails;
    }
}
export default new AppService();