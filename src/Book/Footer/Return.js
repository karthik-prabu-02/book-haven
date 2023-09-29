const Return = () => {
    return(
        <div className="return">
            <h1>Return</h1>
            <p>At BookStore, we value your satisfaction and want to ensure a smooth shopping experience. Please read our Return and Refund Policy carefully to understand our guidelines for returns, exchanges, and refunds.</p>
            <ol>
                <li><h3>Returns and Exchanges</h3>
                    <ol className="child_ol">
                        <li><h3>Eligibility</h3>
                            <p>You may be eligible to return or exchange an item if it meets the following conditions:</p>
                            <ul>
                                <li>The item is in its original, unused condition.</li>
                                <li>It is returned within [X days/weeks] from the date of purchase or delivery.</li>
                                <li>The item is not a non-returnable or non-refundable product (e.g., downloadable eBooks, gift cards, personalized items).</li>
                            </ul>
                        </li>
                        <li><h3>Initiation of Returns</h3>
                            <p>To initiate a return or exchange, please follow these steps:</p>
                            <ul>
                                <li>Log in to your BookStore account.</li>
                                <li>Go to the "Order History" section.</li>
                                <li>Select the order containing the item you wish to return or exchange.</li>
                                <li>Follow the on-screen instructions to request a return or exchange.</li>
                            </ul>
                        </li>
                        <li><h3>Return Shipping</h3>
                            <ul><li>Customers are responsible for the cost of return shipping, unless the return is due to an error on our part (e.g., wrong item shipped, damaged item).</li></ul>
                        </li>
                        <li><h3>Condition of Returned Items</h3>
                            <ul><li>Returned items must be in their original condition, including all packaging, tags, and accessories.</li></ul>
                        </li>
                    </ol>
                </li>
               
                <li><h3>Refunds</h3>
                    <ol className="child_ol">
                        <li><h3>Eligibility</h3>
                            <p>Refunds are issued under the following circumstances:</p>
                            <ul>
                                <li>The item is returned in accordance with our return policy.</li>
                                <li>The item is found to be defective or damaged upon receipt.</li>
                            </ul>

                        </li>
                        <li><h3>Refund Process</h3>
                           
                            <ul>
                                <li>Once your returned item is received and inspected, we will notify you of the approval or rejection of your refund.</li>
                                <li>If approved, your refund will be processed, and a credit will be automatically applied to your original payment method within [X business days].</li>
                            </ul>

                        </li>
                        <li><h3>Non-Refundable Items</h3>
                            <p>Certain items are non-refundable, including:</p>
                            <ul>
                                <li>Downloadable eBooks and digital content.</li>
                                <li>Gift cards or vouchers.</li>
                                <li>Personalized or customized items.</li>
                            </ul>
                        </li>
                    </ol>
                </li>

                <li><h3>Cancellations</h3>
                    <ol className="child_ol">
                        <li><h3> Order Cancellations</h3>
                            <ul>
                                <li>You may cancel an order before it has been shipped. To cancel an order, please contact our [Customer Support Team] as soon as possible.</li>
                            </ul>

                        </li>
                        <li><h3> Refunds for Canceled Orders</h3>
                            <ul><li>If you cancel an order before it has been shipped, we will issue a refund to your original payment method.</li></ul>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}
export default Return;