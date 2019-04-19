import 'package:flutter/material.dart';

class LightBulb extends StatelessWidget {
  LightBulb({this.isLit, this.bulbColor});
  bool isLit = false;

  Color bulbColor;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(5),
      color: bulbColor,
      child: Text('${onOrOff()}'),
    );
  }

  String onOrOff() {
    return isLit ? "ON" : "OFF";
  }
}
