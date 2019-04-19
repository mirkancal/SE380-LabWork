import 'package:flutter/material.dart';

class LightColorSelector extends StatelessWidget {
  LightColorSelector({this.selectColorCallback, this.initialColor});
  List<String> _colors = ['red', 'green', 'blue'];
  String initialColor;
  Function selectColorCallback;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: DropdownButton(
          value: initialColor,
          onChanged: (newValue) {
            selectColorCallback(newValue);
          },
          items: _colors.map((color) {
            return DropdownMenuItem(child: Text(color), value: color);
          }).toList()),
    );
  }
}
