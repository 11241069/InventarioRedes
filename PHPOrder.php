<?php
$con=mysqli_connect("localhost","root","daemonaeon","inventarioNFC") or die("Sin conexión");

$results=array();

        
        $products=array();
        $order_id=$row['order_id'];
        $order_number=$row['order_number'];
        $order_date=$row['order_date'];
        $productResult = mysqli_query($con,"SELECT * FROM Orders O join orderProduct OP on OP.order_id=$order_id and O.order_id=$order_id join Product P on P.product_id=OP.product_id");
        while($row2=mysqli_fetch_array($productResult)){
                $results[] = array(
                        'order_id'=>$row2['order_id'],
                        'order_number'=>$row2['order_number'],
                         'order_date'=>$row2['order_date'],
                        'product_barcode'=>$row2['product_barcode'],
                        'product_name'=>$row2['product_name'],
                        'purchase_price'=>$row2['purchase_price'],
                        'sell_price'=>$row2['sell_price'],
                        'quantity'=>$row2['quantity']
                );
        }

$json = json_encode($results);
mysqli_close($con);
php?>
