import 'package:flutter/material.dart';
import 'package:labworks_mobile/src/widgets/LightBulb.dart';

class LightButton extends StatelessWidget {
  LightButton({this.isLightOn, this.onButtonPressed});
  final bool isLightOn;
  final Function onButtonPressed;
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      padding: EdgeInsets.all(5),
      child: Column(
        children: <Widget>[
          MaterialButton(
            color: Colors.blue,
            child: Text("TURN LIGHT ${onOrOff()}",
                style: TextStyle(color: Colors.black)),
            onPressed: () {
              onButtonPressed();
            },
          ),
        ],
      ),
    );
  }

  String onOrOff() {
    return isLightOn ? "OFF" : "ON";
  }
}
