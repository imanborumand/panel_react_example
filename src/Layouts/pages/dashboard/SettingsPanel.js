

export default function SettingsPanel() {
    return(
        <div className="row">
            <div className="col-12">
                <div className="callout callout-info">
                    <h5><i className="fas fa-info"></i> Note:</h5>
                    This page has been enhanced for printing. Click the print button at the bottom of the invoice to
                    test.
                </div>



                <div className="invoice p-3 mb-3">

                    <div className="row">
                        <div className="col-12">
                            <h4>
                                <i className="fas fa-globe"></i> AdminLTE, Inc.
                                <small className="float-right">Date: 2/10/2014</small>
                            </h4>
                        </div>

                    </div>

                    <div className="row invoice-info">
                        <div className="col-sm-4 invoice-col">
                            From
                            <address>
                                <strong>Admin, Inc.</strong>
                            </address>
                        </div>

                        <div className="col-sm-4 invoice-col">
                            To
                            <address>
                                <strong>John Doe</strong>
                            </address>
                        </div>

                        <div className="col-sm-4 invoice-col">
                            <b>Invoice #007612</b>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 table-responsive">

                        </div>

                    </div>


                    <div className="row">

                        <div className="col-6">
                            <p className="lead">Payment Methods:</p>
                            <img src="../../dist/img/credit/visa.png" alt="Visa"/>
                                <img src="../../dist/img/credit/mastercard.png" alt="Mastercard"/>
                                    <img src="../../dist/img/credit/american-express.png" alt="American Express"/>
                                        <img src="../../dist/img/credit/paypal2.png" alt="Paypal"/>

                        </div>

                        <div className="col-6">
                            <p className="lead">Amount Due 2/22/2014</p>

                            <div className="table-responsive">

                            </div>
                        </div>

                    </div>



                </div>

            </div>

        </div>
    )
}