<template>
  <div class="tree">
    <b-row>
      <b-col lg="6">
        <div class="form-group">
            <label for="input-check-node">搜索:</label>
            <input type="input" class="form-control" 
              id="input-check-node" 
              placeholder="Identify node..." 
              value="Parent 1">
          </div>
        <div id="treeview-checkable"></div>
      </b-col>
      <b-col lg="6">
        <div id="checkable-output">
          <ul>
            <li v-for="(item, index) in checkables" v-if="item" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Tree",
  data() {
    return {
      trees: [
        {
          text: "Parent 1",
          nodes: [
            {
              text: "Child 1",
              nodes: [
                {
                  text: "Grandchild 1",
                  nodes: [
                    {
                      text: "Node 1"
                    }
                  ]
                },
                {
                  text: "Grandchild 2"
                }
              ]
            },
            {
              text: "Child 2"
            }
          ]
        },
        {
          text: "Parent 2"
        },
        {
          text: "Parent 3"
        }
      ],
      checkables: []
    };
  },
  methods: {
    treeView() {
      let _this = this
      var $checkableTree = $("#treeview-checkable").treeview({
        data: this.trees,
        expandIcon: "fa fa-plus",
        collapseIcon: "fa fa-minus",
        checkedIcon: "fa fa-check-square-o",
        uncheckedIcon: "fa fa-square-o",
        showIcon: false,
        showCheckbox: true,
        onNodeChecked: function(event, node) {
          _this.checkables = _this.checkables.concat({name: node.text})
        },
        onNodeUnchecked: function(event, node) {
          for (var i = _this.checkables.length-1;i >= 0;i--){
            if(_this.checkables[i].name == node.text) _this.checkables.splice(i,1)
          }
        }
      });
      var findCheckableNodess = function() {
        return $checkableTree.treeview("search", [
          $("#input-check-node").val(),
          { ignoreCase: false, exactMatch: false }
        ]);
      };
      var checkableNodes = findCheckableNodess();
      // Check/uncheck/toggle nodes
      $('#input-check-node').on('keyup', function (e) {
        checkableNodes = findCheckableNodess();
        $('.check-node').prop('disabled', !(checkableNodes.length >= 1));
      });
    }
  },
  mounted() {
    this.treeView()
  }
};
</script>

<style>

</style>