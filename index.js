var j = require('jquery');
var eventy = require('eventy');

module.exports = function (Controller) {
  eventy(Controller.prototype);

  /**
   * Selection
   */
  // Ancestors
  Controller.prototype.parent = function () {}
  Controller.prototype.ancestors = function () {}
  Controller.prototype.selectAncestor = function (selector) {}
  Controller.prototype.selectAncestors = function (selector) {}

  // Siblings
  Controller.prototype.prevSibling = function () {}
  Controller.prototype.prevSiblings = function () {}
  Controller.prototype.siblings = function () {}
  Controller.prototype.nextSibling = function () {}
  Controller.prototype.nextSiblings = function () {}
  Controller.prototype.selectPrevSibling = function (selector) {}
  Controller.prototype.selectPrevSiblings = function (selector) {}
  Controller.prototype.selectSiblings = function (selector) {}
  Controller.prototype.selectNextSibling = function (selector) {}
  Controller.prototype.selectNextSiblings = function (selector) {}

  // Children
  Controller.prototype.children = function () {}
  Controller.prototype.firstChild = function () {}
  Controller.prototype.lastChild = function () {}
  Controller.prototype.selectChildren = function (selector) {}
  Controller.prototype.selectFirstChild = function (selector) {}
  Controller.prototype.selectLastChild = function (selector) {}

  // Descendants
  Controller.prototype.descendants = function () {}

  Controller.prototype.selectDescendants = function (selector) {
    var descendants = [];
    var jDescendants = j(this.el).find(selector);

    if (jDescendants.length === 0) {
      return null;
    }

    jDescendants.each(function (index, element) {
      descendants.push(element);
    });

    return descendants;
  }

  Controller.prototype.selectFirstDescendant = function (selector) {
    return j(this.el).find(selector).get(0) || null;
  }

  Controller.prototype.selectLastDescendant = function (selector) {
    var descendants = j(this.el).find(selector);

    if (descendants.length) {
      return descendants.get(descendants.length - 1);
    } else {
      return null;
    }
  }

  Controller.prototype.selectFirst = Controller.prototype.selectFirstDescendant;
  Controller.prototype.selectLast = Controller.prototype.selectLastDescendant;
  Controller.prototype.select = Controller.prototype.selectFirstDescendant;
  Controller.prototype.selectAll = Controller.prototype.selectDescendants;

  /**
   * Deletion
   */
  Controller.prototype.remove = function (childCtrler) {
    return this.el.removeChild(childCtrler.el);
  }

  Controller.prototype.empty = function () {
    return j(this.el).empty();
  }

  Controller.prototype.destroy = function () {
    return this.el.parentNode.removeChild(this.el);
  }

  /**
   * Insertion
   */
  Controller.prototype.append = function (ctrler) {
    return this.el.appendChild(ctrler.el);
  }

  Controller.prototype.prepend = function (ctrler) {
    return this.el.insertBefore(ctrler.el, this.el.firstChild);
  }

  Controller.prototype.appendTo = function (parentCtrler) {}
  Controller.prototype.prependTo = function (parentCtrler) {}
  Controller.prototype.before = function (ctrler) {}
  Controller.prototype.after = function (ctrler) {}
  Controller.prototype.insertBefore = function (targetCtrler) {}
  Controller.prototype.insertAfter = function (targetCtrler) {}

  /**
   * Styles
   */
  Controller.prototype.hide = function () {
    this.el.style.display = 'none';
    return this;
  }

  Controller.prototype.show = function () {
    this.el.style.display = '';
    return this;
  }

  Controller.prototype.transparent = function () {
    this.el.style.opacity = '0';
    return this;
  }

  Controller.prototype.style = function (name, value) {
    this.el.style[name] = value;
    return this;
  }

  Controller.prototype.display = function (value) {
    value = value || 'block';
    this.style.display = value;
    return this;
  }

  /**
   * Classes
   */
  Controller.prototype.hasClass = function (className) {
    j(this.el).hasClass(className);
    return this;
  }

  Controller.prototype.addClass = function (className) {
    j(this.el).addClass(className);
    return this;
  }

  Controller.prototype.removeClass = function (className) {
    j(this.el).removeClass(className);
    return this;
  }

  Controller.prototype.toggleClass = function (className) {
    if (j(this.el).hasClass(className)) {
      return j(this.el).removeClass(className);
    } else {
      return j(this.el).addClass(className);
    }
  }

  /**
   * Attribute
   */
  Controller.prototype.hasAttribute = function (name) {
    var attr = j(this.el).attr(name);

    if (typeof attr === 'undefined' || attr === false) {
      return false;
    } else {
      return true;
    }
  }

  Controller.prototype.getAttribute = function (name) {
    return j(this.el).attr(name);
  }

  Controller.prototype.setAttribute = function (name, value) {
    return j(this.el).attr(name, value);
  }

  Controller.prototype.removeAttribute = function (name) {
    return j(this.el).removeAttr(name);
  }

  return Controller;
}
